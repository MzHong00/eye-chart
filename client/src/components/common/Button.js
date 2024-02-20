const Button = ({
    handler,
    componentImg,
    urlImg,
    name,
    contentStyles = '',
    btnStyles = '',
    containerStyles = '',
}) => 
    <div className={`flex ${containerStyles}`}>
        <button
            className={`flex justify-center items-center rounded-3xl gap-1 ${btnStyles}`}
            onClick={handler}>
            <div className={`${contentStyles}`}>
                {urlImg && <img src={urlImg} alt="사용자" className={`w-8 h-8 rounded-full`} /> }
                {componentImg && <span>{componentImg()}</span>}
                {name && <span>{name}</span>}
            </div>
        </button>
    </div>

export default Button;