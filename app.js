// {
//     item: '',
//     brand '',
//     units: '',
//     quantity: 0,
//     isPurchased: false
//   }
//Make an array of 3 objects using the above shape and render the item, quantity and units (12 pack, 1lb, 2 liters, etc.)

const groceryList = [
    {
        item: "Strawberries",
        brand: "Del Monte",
        units: "3 lbs",
        quantity: 40,
        isPurchased: false,
    },
    {
        item: "Japanese sweet potatoes",
        brand: "The Potato Company",
        units: "10 lbs",
        quantity: 10,
        isPurchased: false,
    },
    {
        item: "Black bean patties",
        brand: "Morning Star",
        units: "1 lb",
        quantity: 8,
        isPurchased: false,
    },
]
console.table(groceryList)

//Make inputs so that new items can be added
class App extends React.Component {
    state = {
        item: "",
        brand: "",
        units: "",
        quantity: 0,
        isPurchased: false
    }

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

        this.setState({
            products: [newListItem, ...this.state.products],
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

                <h2> Insert</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="item"> Item: </label>
                    <input id="item" type="text" value={this.state.item} onChange={this.handleChange} />
                    <label htmlFor="brand"> Brand: </label>
                    <input id="brand" type="text" value={this.state.item} onChange={this.handleChange} />
                    <label htmlFor="units"> Units: </label>
                    <input id="units" type="text" value={this.state.item} onChange={this.handleChange} />
                    <label htmlFor="quantity"> Quantity: </label>
                    <input id="quantity" type="text" value={this.state.item} onChange={this.handleChange} />
                </form>

                <div>
                    <h2>Preview our new item</h2>
                    <h3>{this.state.item}</h3>
                    <h4>{this.state.brand}</h4>
                    <h5>{this.state.units}</h5>
                    <h5>{this.state.quantity}</h5>
                </div>

            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#container')
)