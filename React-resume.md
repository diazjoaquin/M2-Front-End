React-Resume:


React usa Babel y Webpack
Archivo .JSX --> Babel compila JSX a JS. Dentro de JSX podemos utilizar elementos HTML.
    Todo código JS dentro de elementos HTML va entre "{}".

    ```javascript
    function Welcome (props) { // --> props siempre va ser un objeto. 
    // Por buena práctica las funciones usan CamelCase; por su equivalencia a constructor en js.
        return <h1>Hello, {props.name}</h1>;
    }

    class Welcome extends React.Component {
        render() {
            return <h1>Hello, {this.props.name}</h1>; 
        }
    }

