import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'css/styles.css';
import { Searchbar } from 'components/Searchbar';
import { ImageGalleryHub } from 'components/ImageGalleryHub';

export class App extends Component {
  static defaultProps = {
    initialValue: 1,
  };
  state = {
    query: '',
    gallery: [],
    page: this.props.initialValue,
    total: null,
    totalHits: null,
  };

  handleFormSubmit = ({ query }) => {
    const { initialValue } = this.props;
    const q = query.trim().toLowerCase();
    if (q === '') {
      return toast.warn('Please let us know your query item');
    }
    this.setState({
      query: q,
      page: initialValue,
      gallery: [],
      total: null,
      totalHits: null,
    });
  };

  render() {
    const { query, page, gallery, total, totalHits } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGalleryHub
          query={query}
          page={page}
          gallery={gallery}
          total={total}
          totalHits={totalHits}
        />
        <ToastContainer position="top-left" autoClose={5000} />
      </>
    );
  }
}
