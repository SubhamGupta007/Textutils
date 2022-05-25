import React from 'react'

const Alerts = (props) => {

    const capitalize = (word) =>{

        return word.charAt(0).toUpperCase() + word.slice(1);
    }
  return (
   props.alert && <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
  <button type="button" className="btn-close" data-dismiss="alert" aria-label="Close">
  </button>
</div>
  )
}

export default Alerts