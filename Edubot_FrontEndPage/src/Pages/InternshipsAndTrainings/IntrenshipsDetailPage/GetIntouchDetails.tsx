interface GetIntouchDetailsProps {
    duration: number; // Example property
  }
  
  const GetIntouchDetails: React.FC<GetIntouchDetailsProps> = ({ duration }) => {
    return (
      <div>
        <p>Duration: {duration} months</p>
        {/* Other component content */}
      </div>
    );
  }
  
  export default GetIntouchDetails;