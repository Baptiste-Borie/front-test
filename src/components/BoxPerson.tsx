import {Box} from "@chakra-ui/react";
import "../style/components.css";
import {Person} from "../data/gens";


// type BoxPersonProps qui permet de définir le type des arguments.
interface BoxPersonProps {
  name: string;
  person: Person;
  setProfileDisplay: (name: string) => void;
}


export function BoxPerson({ name, person, setProfileDisplay }: BoxPersonProps) {
  
  const displayProfile = () => {
    setProfileDisplay(name);
  };  

  const adaptColorAge = () => {
    // Calcul la valeur du rouge en fonction de l'age de la personne 
    const red = 255 - Math.floor((parseInt(person.age) * 200) / 100);
    let color = 'rgb('+red+', 0, 0)';
    return color;
  };

  

  return (
      <Box className="BoxPerson" bg={adaptColorAge()} p={4} onClick={() => displayProfile()}>
        {name}
    </Box>
  );
}

export default BoxPerson;
