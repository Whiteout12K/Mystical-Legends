/*
Copyright 2019 Adobe
All Rights Reserved.
NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it. If you have received this file from a source other than Adobe,
then your use, modification, or distribution of it requires the prior
written permission of Adobe.
*/

/* Pass the embed mode option here */
var viewerConfig = {
    embedMode: "SIZED_CONTAINER"
};

/* Wait for Adobe Document Services PDF Embed API to be ready */
document.addEventListener("adobe_dc_view_sdk.ready", function () {
    /* Initialize the AdobeDC View object */
    var adobeDCView = new AdobeDC.View({
        /* Pass your registered client id */
        clientId: "911b5046f62d46c2a390eac93ea08776",
        /* Pass the div id in which PDF should be rendered */
        divId: "adobe-dc-view",
    });

    /* Invoke the file preview API on Adobe DC View object */
    adobeDCView.previewFile({
        /* Pass information on how to access the file */
        content: {
            /* Location of file where it is hosted */
            location: {
                url: "https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:8c6547e0-2916-4d39-a89f-2d5a2f1d3986 Luces1.pdf",
                /*
                If the file URL requires some additional headers, then it can be passed as follows:-
                header: [
                    {
                        key: "<HEADER_KEY>",
                        value: "<HEADER_VALUE>",
                    }
                ]
                */
            },
        },
        /* Pass meta data of file */
        metaData: {
            /* file name */
            fileName: "Zenith Luces and the Journey of the Mystical Beings"
        }
    }, viewerConfig);
});