import React from 'react';
function WithListLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    //log.info(props)
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        Hold on, fetching new stuffs to learn, may take some time :)
      </p>
    );
  };
}
export default WithListLoading;
