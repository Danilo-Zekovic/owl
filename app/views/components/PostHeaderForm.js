import React from 'react'

function PostHeaderForm(props) {
  return (
    <form>
      <div className="row">
        <div className="form-group col-md-3">
          <label>Title/Naslov: </label>
          <input
            name="title"
            type="text"
            className="form-control"
            value={props.value.title}
            onChange={props.onChange} />
        </div>
        <div className="form-group col-md-3">
          <label>SubTitle/Podnaslov: </label>
          <input
            name="subTitle"
            type="text"
            className="form-control"
            value={props.value.subTitle}
            onChange={props.onChange} />
        </div>
        <div className="form-group col-md-3">
          <label>Author/Autor: </label>
          <input
            name="author"
            type="text"
            className="form-control"
            value={props.value.author}
            onChange={props.onChange} />
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-6">
          <label>Description/Opis: </label>
          <input
            name="description"
            type="text"
            className="form-control"
            value={props.value.description}
            onChange={props.onChange} />
        </div>
      </div>
    </form>
  );
}

export default PostHeaderForm
