import { toBePartiallyChecked } from "@testing-library/jest-dom/matchers";
import { Component } from "react";

const styles = {
    button: {
        backgroundColor: '#0A283E',
        borderRadius: '5px',
        color: '#fff',
        padding : '15px 20px',
        border: 'none',
        cursor: 'pointer',
    }
}

class Button extends Component {
    render() {
        return (
            <button style={styles.button} {...this.props} />
        )
    }
}
    
export default Button