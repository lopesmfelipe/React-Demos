package com.company.gameslist.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.company.gameslist.entities.Game;

public interface GameRepository extends JpaRepository<Game, Long>{
	
}
