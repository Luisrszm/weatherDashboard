// TODO: Define a City class with name and id properties
import fs from 'node:fs/promises'

class City {
  name: string;
  id: string;

  constructor(name: string, id: string){
    this.name = name;
    this.id = id;
  }
};

// TODO: Complete the HistoryService class
class HistoryService {
  // TODO: Define a read method that reads from the searchHistory.json file
  private async read() {
    const historyFile =  await fs.readFile('../../searchHistory.json', 'utf8');
    console.log("Info: searchHistory.json file has been read successfully");
    return historyFile;
  }
  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  private async write(cities: City[]) {
    const updatedCities = JSON.stringify(cities,null,2);
    await fs.writeFile('../../searchHistory.json',updatedCities);
    console.log("Info: searchHistory.json file has been edited successfully");
  }

  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  async getCities() {
  const parseHistory = JSON.parse( await this.read() );
  return parseHistory;
  }

  // TODO Define an addCity method that adds a city to the searchHistory.json file
  async addCity(city: string) {
    const parseHistory = await this.getCities();
    const newCities = parseHistory.push(city);
    this.write(newCities);
  }
  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  async removeCity(id: string) {
    const parseHistory = await this.getCities();
    const filteredCities = parseHistory.filter(
      (city: City) => city.id !== id
    );
    this.write(filteredCities);
    console.log("Info: City has been removed successfully");
  };

}

export default new HistoryService();
