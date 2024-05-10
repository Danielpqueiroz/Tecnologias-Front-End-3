package br.com.gerenciadordeprodutos.api.Costumer.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class CostumerAddress {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String street;
    private String number;
    private String neighborhood;
    private String city;
    private String state;
    private String  country;
    private String  zipcode;
    @OneToOne
    @JoinColumn(name = "costumer_id")
    private Costumer costumer;

}
