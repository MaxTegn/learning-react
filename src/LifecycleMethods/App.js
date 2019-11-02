import React from 'react';

class App extends React.Component {
    constructor() {
        super()
        this.state = {}
    }


    static getDerivedStateFromProps(props state){
        // return new updated state based upon the props
    }

    getSnapshotBeforeUpdate(){
        // allows to create a backup of the current way things are
        // (eg. save som data about an object)
        // not very common
    }

    // componentWillMount(){

    // }

    componentDidMount(){
        // Get API data to correctly display
    }

    // componentWillReceiveProps(nextProps){
    //     // Runs every time a parent component 
    //     // decides to hand props to a childcomponent

    //     //Check if new incoming props are different than current

    //     if(nextProps.whatever !== this.props.whatever)
    //     {
    //         // something important here
    //     }
    // }

    shouldComponentUpdate(nextProps, nextState){

        //return true if we want to update

        //return false if we dont want update

    }

    // componentWillUpdate(){

    // }

    componentWillUnmount(){
        // remove event listener for example
        // a place to teardown or cleanup your code before your component disappears.
    }

    render() {
        return (
            <div>
                Code goes here
            </div>
        )
    }
}
export default App;