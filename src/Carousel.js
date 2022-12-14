import { Component } from 'react';

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ['https://pets-images.dev-apis.com/pets/none.jpg'],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className='carousel'>
        <img src={images[active]} alt='animal' />
        <div className='carousel-smaller'>
          {images.map((photo, index) => (
            <img
              // for accessibility you would wrap the image in something that can be picked up by tools eg/ <a></a>
              onClick={this.handleIndexClick}
              key={photo}
              src={photo}
              data-index={index}
              className={index === active ? 'active' : ''}
              alt='animal thumbnail'
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
