const GetComments = () => {
    return (
        fetch('https://dummyjson.com/comments')
            .then(res => res.json())
    )
}
export default GetComments