const AllOrders = () => {
    return (
        // fetch('https://dummyjson.com/carts')
        fetch('http://127.0.0.1:3001/api/v1/products/', {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjgyNjRmOWM5OWZmNWIxM2QzY2YxMmEiLCJ1c2VybmFtZSI6ImFkbWluIiwiZnVsbE5hbWUiOiJBZG1pbmlzdHJhdG9yIiwiaWF0IjoxNzE5ODI2NzI5LCJleHAiOjE3MTk5MTMxMjl9.RPohyAPpMAthJ_DCjY82yT9B6FDrKfsC6DszT8TWx88'
            }
        })
            .then(res => res.json())
    )
}
export default AllOrders