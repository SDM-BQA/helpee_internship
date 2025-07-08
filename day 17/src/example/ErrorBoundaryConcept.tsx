interface Props{
    heroName: string
}

const ErrorBoundaryConcept = ({heroName}:Props) =>{
    if(heroName === 'joker') throw new Error('Not a hero')
    return(
        <div className="">
            <div className="">{heroName}</div>
        </div>
    )
}

export default ErrorBoundaryConcept