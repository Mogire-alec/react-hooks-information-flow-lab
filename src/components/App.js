import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleDarkModeClick() {
    setIsDarkMode((isDark) => !isDark);
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <Header onDarkModeClick={handleDarkModeClick} isDarkMode={isDarkMode} />
      <ShoppingList 
        items={itemData} 
        selectedCategory={selectedCategory} 
        onCategoryChange={handleCategoryChange} 
      />
    </div>
  );
}

export default App;
