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
    const queryDefaultValue: string[] = ['nyhavn', 'tivoli'];

    const [query, setQuery] = useState<string>(queryDefaultValue.join(','));
    const [items, setItems] = useState<FeedItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        FeedAPI.search(query).then((result: FeedResult) => {
            setLoading(false);
            if (result && result.items) {
                setItems(result.items);
            }
        })
            .catch(error => {
                setLoading(false);
            });
    }, [query]);

    const handleChange = useCallback((chips: string[]) => {
        setQuery(chips.join(','));
    }, []);

    return (
        <div className="App">
            <ChipInput
                defaultValue={queryDefaultValue}
                onChange={(chips) => handleChange(chips)}
                fullWidthInput
                fullWidth
                label={'Type a tag to search'}
            />
            <div style={{ maxWidth: '90%', margin: 'auto', marginTop: '20px', marginBottom: '20px' }}>
                <Grid
                    container
                    spacing={3}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                  { loading? (< SkeletonGrid />) : <FeedList list={items} /> }
                </Grid>
            </div>
        </div>
    );
}

export default App;
