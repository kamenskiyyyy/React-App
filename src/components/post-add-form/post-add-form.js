import './post-add-form.css';

export const PostAddForm = ({onAdd}) => {
    return (
        <div className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="0 чем вы думаете сейчас?"
                className="form-control new-post-label"
            />
            <button
                type="submit"
                className="btn btn-outline-secundary"
                onClick={() => onAdd("Hello")}>
                Добавить</button>
        </div>
    )
}