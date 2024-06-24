/* eslint-disable react/prop-types */
const Card=({children, bg_style="bg-gray-100"})=>{
    return (
        <div className={`${bg_style} p-6 rounded-lg shadow-md`}>
            {children}
        </div>
    )
}

export default Card;