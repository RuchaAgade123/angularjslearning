function MyAppComponentCtrl($scope) {
 
  var turtlesData = [
    {
      type: "Green Turtle",
      locations: "Tropical and subtropical oceans worldwide",
      size: "Up to 1.5m and up to 300kg",
      lifespan: "Over 80 years",
      diet: "Herbivore",
      description:
        "The green turtle is a large, weighty sea turtle with a wide, smooth carapace, or shell. It inhabits tropical and subtropical coastal waters around the world and has been observed clambering onto land to sunbathe. It is named not for the color of its shell, which is normally brown or olive depending on its habitat, but for the greenish color of its skin. There are two types of green turtles—scientists are currently debating whether they are subspecies or separate species—including the Atlantic green turtle, normally found off the shores of Europe and North America, and the Eastern Pacific green turtle, which has been found in coastal waters from Alaska to Chile."
    },
    {
      type: "Loggerhead Turtle",
      locations: "Tropical and subtropical oceans worldwide",
      size: "90cm, 115kg",
      lifespan: "More than 50 years",
      diet: "Carnivore",
      description:
        "Loggerhead turtles are the most abundant of all the marine turtle species in U.S. waters. But persistent population declines due to pollution, shrimp trawling, and development in their nesting areas, among other factors, have kept this wide-ranging seagoer on the threatened species list since 1978. Their enormous range encompasses all but the most frigid waters of the world's oceans. They seem to prefer coastal habitats, but often frequent inland water bodies and will travel hundreds of miles out to sea."
    }
  ];
  $scope.data = turtlesData;
}
const MyAppComponent = {
  template: "<h1>Its Working</h1><br><h2>{{data}}!</h2>",
  controller: MyAppComponentCtrl
};

angular.module("Quiz").component("myApp", MyAppComponent);
