
const ufmManifest = {
    type: "ufmComponent",
    alias: "My.CustomUfmComponent",
    name: "My Custom UFM Component",
    api: () => import("./ufm.component"),
    meta: {
        marker: ">",
    },
};

export const manifests = [ufmManifest];
