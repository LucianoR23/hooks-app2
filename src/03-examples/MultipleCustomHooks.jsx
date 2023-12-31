import { useCounter, useFetch } from "../hooks"
import { LoadingQuote } from "./LoadingQuote"
import { Quote } from "./Quote"


export const MultipleCustomHooks = () => {

    const { increment, counter } = useCounter(1)

    const { data, isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)

    const { author, quote } = !!data && data[0]

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                isLoading ? 
                (
                    <LoadingQuote />
                ) :
                (
                    <Quote author={ author } quote={ quote } />
                )
            }

            <button onClick={ increment } className="btn btn-primary" disabled={ isLoading }>Next quote</button>

        </>
    )
}