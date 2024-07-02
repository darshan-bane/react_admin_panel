const AllCustomer = () => {
    return (
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
    )
}
export default AllCustomer