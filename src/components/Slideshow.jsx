function Slideshow({ ficheSelection }) {    
    return (
      <div>
          <div key={ficheSelection.id}>
            <div>
              {ficheSelection.pictures.map((picture, index) => {
                console.log(picture);
                return (
                  <img key={index} src={picture} alt={`pic ${index + 1}`} />
                );
              })}
            </div>
          </div>
      </div>
    );
  }

export default Slideshow