import React, { useState } from "react";
import room from "./RoomsInformation";
import "./Roomfilterstyles.css";
const RoomFilter = () => {
  const [selectedType, setSelectedType] = useState("all");
  const [maxPrice, setMaxPrice] = useState(200);
  const [showAvailable, setShowAvailable] = useState(true);

  // Filtra las habitaciones según los criterios seleccionados por el usuario.
  const filteredRooms = room.filter((room) => {
    const typeMatch = selectedType === "all" || room.type === selectedType; //Comprueba si el tipo de habitación coincide con el seleccionado o si "all" está seleccionado (mostrando todos los tipos).
    const priceMatch = room.price <= maxPrice;
    const availabilityMatch = showAvailable ? room.available : true; // Si el filtro de disponibilidad está activado (showAvailable === true), se incluyen solo las habitaciones disponibles. Si no, se incluyen todas.

    return typeMatch && priceMatch && availabilityMatch;
  });

  return (
    <>
      <div className="contenedor-filtro">
        <div className="titulo-filtro-habitaciones">
          Aquí encontrara las habitaciones disponibles
        </div>
        <div className="filtro-habitaciones">Filtrar Habitaciones</div>
        {/* Filtro por tipo de habitación */}
        <div className="contenedor-filtro-habitacion">
          <label className="label-roomfilter" htmlFor="type">
            Tipo de Habitación:{" "}
          </label>
          <select
            id="type"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="all">Todos</option>
            <option value="simple">Simple</option>
            <option value="doble">Doble</option>
            <option value="familiar">Familiar</option>
            <option value="suite">Suite</option>
          </select>

          {/* Filtro por precio máximo */}
          <label className="label-roomfilter" htmlFor="price">
            Precio Máximo: {maxPrice}{" "}
          </label>
          <input
            type="range"
            id="price"
            min="0"
            max="200"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />

          {/* Filtro por disponibilidad */}
          <label className="label-roomfilter" htmlFor="available">
            Mostrar solo disponibles
          </label>
          <input
            type="checkbox"
            id="available"
            checked={showAvailable}
            onChange={() => setShowAvailable(!showAvailable)}
          />
        </div>
        <div className="titulo-resultados">
          <h2>Resultados</h2>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {filteredRooms.length > 0 ? (
            filteredRooms.map((room) => (
              <div
                key={room.id}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  width: "200px",
                }}
              >
                <img
                  src={room.image}
                  alt={room.name}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                    borderRadius: "5px",
                  }}
                />
                <h3>{room.name}</h3>
                <p>Precio: ${room.price}</p>
                <p>Tipo: {room.type}</p>
                <p>{room.available ? "Disponible" : "No disponible"}</p>
              </div>
            ))
          ) : (
            <p>
              No hay habitaciones disponibles que coincidan con los filtros.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default RoomFilter;
