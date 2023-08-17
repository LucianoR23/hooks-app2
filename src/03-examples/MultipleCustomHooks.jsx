import { useCounter } from "../hooks/useCounter"
import { useFetch } from "../hooks/useFetch"


export const MultipleCustomHooks = () => {

    const { increment, counter } = useCounter()

    const { data, isLoading, hasError, refresh } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)

    const { author, quote } = !!data && data[0]

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                isLoading ? 
                (
                    <div className="alert alert-info text-center">Loading...</div>
                ) :
                (
                    <blockquote className="blockquote text-end">
                        <p>{ quote }</p>
                        <footer className="blockquote-footer mt-2">{ author }</footer>
                    </blockquote>
                )
            }

            <button onClick={ increment } className="btn btn-primary">Next quote</button>

        </>
    )
}
