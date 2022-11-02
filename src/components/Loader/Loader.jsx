import { Oval } from 'react-loader-spinner';

export default function Loader() {
  return (
    <>
      <Oval
        height={20}
        width={20}
        color="#031903"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </>
  );
}
