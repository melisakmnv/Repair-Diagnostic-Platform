type ProgressBarProps = {
    height?: number;
    width?: number;
    color?: string;
    progress: number;
    direction?: "horizontal" | "vertical";
}

export const ProgressBar = ({ height, width, color, progress, direction = "horizontal" }: ProgressBarProps) => {

    const isHorizontal = direction === "horizontal";

    const PARENT_DIV_STYLE: React.CSSProperties = {
        width: isHorizontal ? "100%" : `${width}px`,
        height: isHorizontal ? `${height}px` : "100%",
        backgroundColor: '#DFE2FF',
    }

    const CHILD_DIV_STYLE: React.CSSProperties = {
        width: isHorizontal ? `${progress}%` : "100%",
        height: isHorizontal ? "100%" : `${progress}%`,
        backgroundColor: color,
        transition: 'width 0.5s ease, height 0.5s ease'
    }

    const progresstext = {
        padding: 2,
    }

    return (
        <div style={PARENT_DIV_STYLE}>
            <div style={CHILD_DIV_STYLE}>
                <span style={progresstext}></span>
            </div>
        </div>
    )
}
