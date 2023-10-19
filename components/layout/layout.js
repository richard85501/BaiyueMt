import MainHeader from './mainHeader';

const layout = (props) => {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
};

export default layout;
