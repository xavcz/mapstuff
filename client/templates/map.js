import {pinMe} from '../modules/actions';

Template.map.onRendered(function () {
    this.autorun(function () {
        if (Mapbox.loaded()) {
            L.mapbox.accessToken = Meteor.settings.public.accessToken;
            var map = L.mapbox.map('map', Meteor.settings.public.mapId);
            pinMe();
        }
    });
});

Template.map.events({
    'click [rel=current-map]' (event, instance) {
    }
});