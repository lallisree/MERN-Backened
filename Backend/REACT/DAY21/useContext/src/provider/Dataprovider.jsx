import Datacontext from '../context/Datacontext'

const Dataprovider = ({children}) => {
    const name = "Lalli";
  return (
    <div>
      <Datacontext.Provider value={{name}}>
        {children}
        </Datacontext.Provider>
    </div>
  );
}

export default Dataprovider
