/* eslint-disable react/prop-types */

const Field = ({ placeholder, stylesPropsContainer, stylesPropsInput }) => {
  return (
    <div className={`${stylesPropsContainer}`}>
      <input type="text" placeholder={placeholder} className={`border-solid border rounded-md w-full ${stylesPropsInput}`} />
    </div>
  )
}

export default Field
