signupForm = document.querySelector(".signup")

signupForm.addEventListener("submit", e => {
    e.preventDefault()
    const formData = new FormData(event.target)

    fetch("http://localhost:8000/users", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: formData.get("username"),
            password: formData.get("password")
        })
    })
    .then(response => {
        if(response.status >= 400){
            throw new Error("Bad request")
        }
    })
    .catch(error => console.error(error.message))
})