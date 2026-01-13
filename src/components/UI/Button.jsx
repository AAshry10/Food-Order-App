export default function Button({children, textOnly, className, ...props}) {
    let cssCalasses = textOnly ? "text-button" : "button";
    cssCalasses += " " + className;

    return (
        <button className={cssCalasses} {...props}>
            {children}
        </button>
    )
}