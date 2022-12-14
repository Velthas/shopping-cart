import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import plus from '../../assets/images/plus.svg';
import minus from '../../assets/images/minus.svg';

const SideCartItem = (props) => {
  const { product, handleAdd, handleRemove } = props;

  const shortenedName = product.title.length > 15
    ? `${product.title.slice(0, 15)}...`
    : product.title;
  const total = (product.amount * product.price).toFixed(2);

  return (
    <EntryWrapper>
      <ProductImg src={product.image} alt={product.title} />
      <ProductInfoWrapper>
        <h4>
          { shortenedName }
        </h4>
        <QuantityContainer>
          <QuantityIcon
            src={minus}
            alt="Minus icon"
            onClick={() => handleRemove(product)}
          />
          <p>
            { product.amount }
          </p>
          <QuantityIcon
            src={plus}
            alt="Plus icon"
            onClick={() => handleAdd(product)}
          />
        </QuantityContainer>
        <p>
          { `${total}€` }
        </p>
      </ProductInfoWrapper>
    </EntryWrapper>
  );
};

SideCartItem.propTypes = {
  product: PropTypes.object.isRequired,
  handleAdd: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

const EntryWrapper = styled.div`
  display: flex;

  padding: 20px 5px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.light};
`;

const ProductImg = styled.img`
  height: 100px;
  width: 100px;
`;

const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  padding: 10px;
`;

const QuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 10px;

  width: 100%;
`;

const QuantityIcon = styled.img`
  background-color: ${({ theme }) => theme.colors.gray.light};
  height: 18px;
  width: 18px;

  transition: 0.3s ease-out;
  cursor: pointer;

  &:hover{
    background-color: ${({ theme }) => theme.colors.gray.dark};
  }
`;

export default SideCartItem;
