import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { FeedAPI } from "./services/FeedService";
import FeedItem from "./types/FeedItem";
import FeedResult from "./types/FeedResult";
import ChipInput from 'material-ui-chip-input'
import { Grid } from "@material-ui/core";
import { SkeletonGrid } from "./components/SkeletonGrid";
import { FeedList } from "./components/FeedList";

function App() {

    let scoresByTrackInit = {
        "0": [],
        "1": [],
        "2": [],
        "3": [],
        "4": [],
        "5": [],
        "6": [],
        "-1": [],
    }

    const [selectedFile, setSelectedFile] = useState<any>();
    const [isSelected, setIsSelected] = useState(false);
    const [jsonParsed, setJsonParsed] = useState<any>();
    const [scoresByTrack, setScoresByTrack] = useState<any>(scoresByTrackInit);

    const changeHandler = (event: any) => {
        setSelectedFile(event.target.files[0]);
        setIsSelected(true);
    };

    const handleSubmission = () => {
        console.log('selectedFile', selectedFile);
        readFile(selectedFile);
    };

    const readFile = (file: File) => {
        const reader = new FileReader();
        reader.addEventListener('load', (event: any) => {
            const result = event.target.result;
            console.log('result', JSON.parse(result));
            setJsonParsed(JSON.parse(result));
        });

        reader.addEventListener('progress', (event) => {
            if (event.loaded && event.total) {
                const percent = (event.loaded / event.total) * 100;
                console.log(`Progress: ${Math.round(percent)}`);
            }
        });
        reader.readAsText(file);
    }

    useEffect(() => {
        console.log('jsonParsed', jsonParsed);
        if (!jsonParsed || !jsonParsed.Cars) return;

        let scoresByTrackCopy = Object.assign(scoresByTrack);

        jsonParsed.Cars.forEach((car: any) => {
            car.Scores.forEach((score: any) => {
                // console.log('score', score);
                scoresByTrackCopy = {...scoresByTrackCopy, [score.TrackId]: [...scoresByTrackCopy[score.TrackId], score]};
            })
        })

        setScoresByTrack(scoresByTrackCopy);

        console.log('scoresByTrack', scoresByTrack);
    }, [jsonParsed]);

    return (
        <div>
            <input type="file" name="file" onChange={changeHandler} />
            {isSelected ? (
                <div>
                    <p>Filename: {selectedFile!.name}</p>
                    <p>Filetype: {selectedFile!.type}</p>
                    <p>Size in bytes: {selectedFile!.size}</p>
                    <p>
                        lastModifiedDate:{' '}
                        {selectedFile!.lastModifiedDate.toLocaleDateString()}
                    </p>
                </div>
            ) : (
                <p>Select a file to show details</p>
            )}
            <div>
                <button onClick={handleSubmission}>Submit</button>
            </div>
        </div>
    )
}

export default App;
