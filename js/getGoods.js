const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link');

    const getData = () => {
        fetch('https://willberries-6abbb-default-rtdb.firebaseio.com/db.json')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
    }

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            getData();
        })
    })
}

getGoods();