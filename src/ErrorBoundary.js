//error boundaries must be class components
import { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromErro() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // would place your client side error catcher here
    console.error(error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => {
        this.setState({ redirect: true });
      }, 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to='/' />;
    } else if (this.state.hasError) {
      return (
        <h2>
          There was an error. <Link to='/'>Click here</Link> to go back to the
          homepage or wait 5 seconds and we will do if for you.
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
