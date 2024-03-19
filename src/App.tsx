import  {useState } from "react";
import logo from "./assets/logo.svg";
import "./style/App.css";
import { Box, Flex, Grid, GridItem, Heading, Button} from "@chakra-ui/react";
import  BoxPerson  from "../src/components/BoxPerson";
import  {ModeButton} from "../src/components/ModeButton";
import {gens,Person} from "../src/data/gens";
import {useModeContext} from "../src/Context/context";


function App() {
    const [profileDisplayed, setProfileDisplayed] = useState("");

    const displayProfile = (profile: string) => {
        document.title = profile;
        setProfileDisplayed(profile);
        console.log(profile);
    };

    // métode qui retoune tous les personnes qui ont était manager chez Dunder&Mifflin. 
    const returnManager= (): JSX.Element[]=> {
        const  gensFiltered :JSX.Element[]= [];
        let acc = 0;
        const managers = gens.filter((person: Person) => person.hasBeenManager === true);
        managers.forEach((manager: Person) => {
            gensFiltered.push(<p key={acc}>{manager.name}</p>);
            acc++;
    });

    return gensFiltered;
    };
    const displayMoyenne = () => {
        const ages = gens.map((v) => parseInt(v.age));
        // console.log(ages);
        const sum = ages.reduce((acc, currentVal) => acc + currentVal, 0);
        return sum / ages.length;
    };
    const visibilityDetails = () => {
        if (profileDisplayed === "") {
            return "hidden";
        } else {
            return "visible";
        }
    }

    // Trier le tableau gens par l'age avec sa propre méthode de comparasion selon mozilla doc on array sort
    const compareByAgeCroissant = (a: Person, b: Person) => {
        
        if (parseInt(a.age) < parseInt(b.age)) {
            return -1;
        }
        if (parseInt(a.age) > parseInt(b.age)) {
            return 1;
        }
        return 0;
    };
    
    // méthode qui retourne les gens en les mettants des gridItem 
    const renderCardPeople = (ordreListe: String): JSX.Element[]  => {
        // Init gridItems avec un tableau vide de type JSX.Element[] -> Array d'élément visuel
        const gridItems : JSX.Element[] = [];
        // On utilise la méthode slice pour faire une copie superficielle de gens, sinon on modifierait gens directement
        const tmp : Person[]= gens.slice() ;
        tmp.sort(compareByAgeCroissant);
        if (ordreListe === 'decroissant') {
            tmp.reverse();
        }
        tmp.forEach((currentPeople : Person)=> {
            gridItems.push(
                <GridItem key={currentPeople.name}>
                    <BoxPerson name={currentPeople.name} person={currentPeople} setProfileDisplay={displayProfile} />
                </GridItem>
            );
        });
        return gridItems;
    }

    const { mode } = useModeContext();
    const [ordreListe, setOrdreListe] = useState('croissant');

    const changeOrdre = () => {
        if (ordreListe === 'croissant') {
            setOrdreListe('decroissant');
        } else {
            setOrdreListe('croissant');
        }
    }

    function getGender(name: string): string {
        const firstName = name.split(' ')[0];
        console.log(firstName);
        // J'aurais pu utiliser les fonction asynchrones avec des fetch, await ... mais j'avais un souvenir plus précis des requetes xhr
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `https://api.genderize.io/?name=${firstName} `, false); // false indique une requête synchrone
        xhr.send();

        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            console.log(data)
            return data.gender || 'Inconnu / Erreur API'; // Si gender n'est pas défini, retourne 'Unknown'
        } else {
            console.error('Erreur data:', xhr.statusText);
            return 'Erreur API (Probablement limite de requête/jour atteinte)'; // En cas d'erreur, retourne 'Unknown'
        }
    }
    
        return (
        
            <Box className={mode === 'clair' ? "App" : "AppSombre"}>
                <header className="App-header">
                <img src={logo} alt="logoAlt"  className="App-logo"/>
                <Box>
                    <Heading as='h2' size='xl'>Manager at Dunder & Mifflin : </Heading>
                    {returnManager()}
                </Box>
                <img src={logo} alt="logoAlt"  className="App-logo"/>
                <ModeButton/>
                </header>
                {/* utilisation de l'opérateur ternaire pour que la class flex soit visible seulement si un profil est selectionnez. */}
                <Flex flexDir="column" bg="blue.200" color="white" p="4"  marginBottom={8} className={visibilityDetails() === 'hidden' ? 'flexHidden' : ''}>
                    <Heading as={'h3'} size={'l'}>{profileDisplayed}</Heading>
                    <Box>
                        {gens.find((v) => v.name === profileDisplayed)?.description}
                    </Box>
                        Genre : {getGender(profileDisplayed)}
                </Flex>
                <Box marginBottom={2}>
                    <Box>
                    Moyenne d'age (arrondie): {Math.round(displayMoyenne())}
                    </Box>
                    <Button onClick={() => changeOrdre()}>
                        Croissant
                    </Button>
                </Box>
                <Grid templateColumns='repeat(4, 1fr)' gap={8} marginBottom={8}>
                {renderCardPeople(ordreListe)}
                </Grid>
            </Box>
        
    );
}

export default App;