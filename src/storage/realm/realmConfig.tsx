import { createRealmContext } from "@realm/react";
import Realm from "realm";
import { Profile } from "./model/Profile";

const config: Realm.Configuration = {
    schema: [Profile],
    // Increment the 'schemaVersion', since 'age' has been added to the schema.
    // The initial schemaVersion is 0.
    schemaVersion: 0,
    
};
// pass the configuration object with the updated 'schemaVersion' to
// createRealmContext()
export const {
    RealmProvider,
    useRealm,
    useQuery,
    useObject,
} = createRealmContext(config);
