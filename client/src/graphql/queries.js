import gql from 'graphql-tag';

export const GET_EDITOR = gql`
  query GetEditor @client {
    editor @client
    settings @client {
      themes {
        editor
      }
    }
  }
`;

export const UPDATE_EDITOR = gql`
  mutation UpdateEditor($value: String!) {
    updateEditor(value: $value) @client
  }
`;

export const GET_BLUEPRINT_TEMPLATE = gql`
  query GetBlueprintTemplate($blueprint: String!) {
    template(blueprint: $blueprint)
  }
`;

export const GET_PREVIEW = gql`
  query GetPreview {
    preview @client
  }
`;

export const UPDATE_PREVIEW = gql`
  mutation UpdatePreview($value: String!) {
    updatePreview(value: $value) @client
  }
`;

export const GET_SETTINGS = gql`
  query GetThemes {
    settings @client {
      themes {
        editor
        preview
      }
    }
  }
`;

export const UPDATE_SETTINGS = gql`
  mutation UpdateSettings($settings: Settings) {
    updateSettings(settings: $settings) @client
  }
`;
