class App extends React.Component {
    state = {
        grocery: groceryList,
        item: "",
        brand: "",
        units: "",
        quantity: 0,
        isPurchased: false
    }
    // Every time we do something (type) inside the input, handleChange will be invoked
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const newListItem = {
            item: this.state.item,
            brand: this.state.brand,
            units: this.state.units,
            quantity: this.state.isPurchased
        }
        console.log(newListItem)

        // Correct way of updating
        // event.target.id allows us to use the id we specified in the form to make our handleChange dynamic
        this.setState({
            grocery: [newListItem, ...this.state.grocery],
            item: "",
            brand: "",
            units: "",
            quantity: ""
        })
    }
    render() {
        return (
            <div>
                <h1> Grocery List</h1>

                <h2> Add Items to Your Grocery List</h2>

                {/* 2. Make inputs so that new items can be added */}

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="item"> Item: </label>
                    <input id="item" type="text" value={this.state.item} onChange={this.handleChange} />
                    <label htmlFor="brand"> Brand: </label>
                    <input id="brand" type="text" value={this.state.brand} onChange={this.handleChange} />
                    <label htmlFor="units"> Units: </label>
                    <input id="units" type="text" value={this.state.units} onChange={this.handleChange} />
                    <label htmlFor="quantity"> Quantity: </label>
                    <input id="quantity" type="text" value={this.state.quantity} onChange={this.handleChange} />
        
                </form>

                <div className="newItems">
                    <h2>These Items Have Been Added to Your Grocery List</h2> 
                    <h3>{this.state.item}</h3>
                    <h4>{this.state.brand}</h4>
                    <h5>{this.state.units}</h5>
                    <h5>{this.state.quantity}</h5>
                </div>
                {/* 3. Conditionally render the grocery items based on whether or not they were purchased (ok to have hard coded values for isPurchased) */}
                {/* This is how you create an if else statement in react.js */}

                <h2> These Items Have Been Purchased</h2>
                <ul>
                    {
                        this.state.grocery.map(purchased => {
                            if (purchased.isPurchased === true){
                                return(
                                    <p>{purchased.item} </p>
                                )
                            }

                            })
                        }
                </ul>

            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#container')
)


