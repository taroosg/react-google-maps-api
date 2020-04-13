/// <reference types="googlemaps" />
import * as React from 'react';
import { InfoBox as GoogleMapsInfoBox, InfoBoxOptions as GoogleMapsInfoBoxOptions } from '@react-google-maps/infobox';
declare type InfoBoxOptions = Omit<GoogleMapsInfoBoxOptions, 'position'> & {
    position?: google.maps.LatLng | google.maps.LatLngLiteral;
};
interface InfoBoxState {
    infoBox: GoogleMapsInfoBox | null;
}
export interface InfoBoxProps {
    /** Can be any MVCObject that exposes a LatLng position property and optionally a Point anchorPoint property for calculating the pixelOffset. The anchorPoint is the offset from the anchor's position to the tip of the InfoBox. */
    anchor?: google.maps.MVCObject;
    options?: InfoBoxOptions;
    /** The LatLng at which to display this InfoBox. If the InfoBox is opened with an anchor, the anchor's position will be used instead. */
    position?: google.maps.LatLng | google.maps.LatLngLiteral;
    /** All InfoBoxes are displayed on the map in order of their zIndex, with higher values displaying in front of InfoBoxes with lower values. By default, InfoBoxes are displayed according to their latitude, with InfoBoxes of lower latitudes appearing in front of InfoBoxes at higher latitudes. InfoBoxes are always displayed in front of markers. */
    zIndex?: number;
    /** This event is fired when the close button was clicked. */
    onCloseClick?: () => void;
    /** This event is fired when the <div> containing the InfoBox's content is attached to the DOM. You may wish to monitor this event if you are building out your info window content dynamically. */
    onDomReady?: () => void;
    /** This event is fired when the content property changes. */
    onContentChanged?: () => void;
    /** This event is fired when the position property changes. */
    onPositionChanged?: () => void;
    /** This event is fired when the InfoBox's zIndex changes. */
    onZindexChanged?: () => void;
    /** This callback is called when the infoBox instance has loaded. It is called with the infoBox instance. */
    onLoad?: (infoBox: GoogleMapsInfoBox) => void;
    /** This callback is called when the component unmounts. It is called with the infoBox instance. */
    onUnmount?: (infoBox: GoogleMapsInfoBox) => void;
}
export declare class InfoBoxComponent extends React.PureComponent<InfoBoxProps, InfoBoxState> {
    static contextType: React.Context<google.maps.Map<Element> | null>;
    registeredEvents: google.maps.MapsEventListener[];
    containerElement: HTMLElement | null;
    state: InfoBoxState;
    open: (infoBox: GoogleMapsInfoBox, anchor?: google.maps.MVCObject | undefined) => void;
    setInfoBoxCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: InfoBoxProps): void;
    componentWillUnmount(): void;
    render(): React.ReactPortal | null;
}
export default InfoBoxComponent;
