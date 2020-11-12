import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: fixed;
  // background: #0e0e0e;
  background: ${props => props.theme.colors.primary};
  height: 100vh;
  border-left: solid 1px #777777;
  right: 0;
  min-width: 350px;
  max-width: 350px;
  z-index: 10;
  overflow-y: overlay;
  overflow-x: overlay;

  .title-bar {
    display: flex;
    height: 50px;
    line-height: 14px;
    padding: 8px 8px 5px;
    position: relative;
    user-select: none;
    border-bottom: solid 1px #777777;

    .doc-explorer-back {
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    .title {
      font-weight: 600;
      overflow-x: hidden;
      padding: 10px 0 10px 10px;
      text-align: center;
      text-overflow: ellipsis;
      user-select: text;
      white-space: nowrap;
      flex: 1;
    }

    .close-section {
      display: flex;
      cursor: pointer;
      align-items: center;
      font-weight: 600;
      margin-top: -3px;
      margin-right: 5px;
    }
  }

  .contents {
    padding: 15px;
    bottom: 0;
    left: 0;
    overflow-y: auto;
    padding: 20px 15px;
    position: absolute;
    right: 0;
    top: 47px;

    .doc-type-description {
      p {
        font-size: 16px;
      }
    }

    .doc-category-title {
      border-bottom: 1px solid #777777;
      color: #777;
      cursor: default;
      font-size: 15px;
      font-variant: small-caps;
      font-weight: 700;
      letter-spacing: 1px;
      margin: 0 -15px 10px 0;
      padding: 10px 0;
      user-select: none;
    }

    .doc-category-item {
      margin: 12px 0;

      .field-short-description p, .doc-value-description p {
        font-size: 16px;
      }
      .field-name {
         color: #9cdcfe;
         opacity: 1;
      }
      .arg-name {
        color: #de98ff;
        opacity: 1;
      }
      .type-name {
        color: #ffd143;
        opacity: 1;
      }
      .arg {
        display: block;
        margin-left: 1em;
      }
    }
  }
`;

export default StyledWrapper;

