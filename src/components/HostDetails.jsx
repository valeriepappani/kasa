import '../styles/HostDetails.scss';

function HostDetails({ host }) {
    const [firstName, lastName] = host.name.split(' ');

    return (
        <div className="host-details">
            <div className="host-name">
                <span className="first-name">{firstName}</span>
                <span className="last-name">{lastName}</span>
            </div>
        </div>
    );
}

export default HostDetails
