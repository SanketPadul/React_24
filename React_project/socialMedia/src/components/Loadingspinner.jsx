function LoadingSpinner() {
  return (
    <>
      <div className="d-flex justify-content-center text-[5rem] mt-8">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
}

export default LoadingSpinner;
