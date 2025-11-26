
export function Result(props: { result: string }) {
    return (
        <div className="alert alert-secondary" role="alert">
            You voted {props.result}
        </div>
    );
}