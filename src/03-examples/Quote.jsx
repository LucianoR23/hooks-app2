

export const Quote = ({ author, quote }) => {

    return (
        <blockquote className="blockquote text-end">
            <p>{ quote }</p>
            <footer className="blockquote-footer mt-2">{ author }</footer>
        </blockquote>
    )
}
