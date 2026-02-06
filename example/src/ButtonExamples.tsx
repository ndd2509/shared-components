import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BaseButton, BaseText } from 'shared-components';

// Icon component example (you can replace with your actual icon)
const ArrowRightIcon = () => (
  <View style={{ width: 20, height: 20, backgroundColor: 'white' }} />
);

export default function ButtonExamples() {
  return (
    <View style={styles.container}>
      <BaseText type="Bold" size={24} style={styles.title}>
        BaseButton Examples
      </BaseText>

      {/* Primary Variant */}
      <View style={styles.section}>
        <BaseText type="SemiBold" size={18}>Primary Variant</BaseText>
        <View style={styles.row}>
          <BaseButton
            variant="primary"
            size="small"
            label="Small"
            onPress={() => console.log('Small pressed')}
          />
          <BaseButton
            variant="primary"
            size="regular"
            label="Regular"
            onPress={() => console.log('Regular pressed')}
          />
          <BaseButton
            variant="primary"
            size="large"
            label="Large"
            onPress={() => console.log('Large pressed')}
          />
        </View>
      </View>

      {/* With Icon */}
      <View style={styles.section}>
        <BaseText type="SemiBold" size={18}>With Icon</BaseText>
        <View style={styles.row}>
          <BaseButton
            variant="primary"
            size="regular"
            label="Collect"
            icon={<ArrowRightIcon />}
            iconPosition="right"
            onPress={() => console.log('Collect pressed')}
          />
          <BaseButton
            variant="link-subtle"
            size="regular"
            label="Collect"
            icon={<ArrowRightIcon />}
            iconPosition="right"
            onPress={() => console.log('Collect pressed')}
          />
        </View>
      </View>

      {/* Link Subtle Variant */}
      <View style={styles.section}>
        <BaseText type="SemiBold" size={18}>Link Subtle Variant</BaseText>
        <View style={styles.row}>
          <BaseButton
            variant="link-subtle"
            size="small"
            label="Small"
            onPress={() => console.log('Small pressed')}
          />
          <BaseButton
            variant="link-subtle"
            size="regular"
            label="Regular"
            onPress={() => console.log('Regular pressed')}
          />
          <BaseButton
            variant="link-subtle"
            size="large"
            label="Large"
            onPress={() => console.log('Large pressed')}
          />
        </View>
      </View>

      {/* Red Variant */}
      <View style={styles.section}>
        <BaseText type="SemiBold" size={18}>Red Variant (Danger)</BaseText>
        <View style={styles.row}>
          <BaseButton
            variant="red"
            size="small"
            label="Delete"
            onPress={() => console.log('Delete pressed')}
          />
          <BaseButton
            variant="red"
            size="regular"
            label="Remove"
            onPress={() => console.log('Remove pressed')}
          />
          <BaseButton
            variant="red"
            size="large"
            label="Cancel"
            onPress={() => console.log('Cancel pressed')}
          />
        </View>
      </View>

      {/* Brand Subtle Variant */}
      <View style={styles.section}>
        <BaseText type="SemiBold" size={18}>Brand Subtle Variant</BaseText>
        <View style={styles.row}>
          <BaseButton
            variant="brand-subtle"
            size="small"
            label="Small"
            onPress={() => console.log('Small pressed')}
          />
          <BaseButton
            variant="brand-subtle"
            size="regular"
            label="Regular"
            onPress={() => console.log('Regular pressed')}
          />
          <BaseButton
            variant="brand-subtle"
            size="large"
            label="Large"
            onPress={() => console.log('Large pressed')}
          />
        </View>
      </View>

      {/* Icon Only Buttons */}
      <View style={styles.section}>
        <BaseText type="SemiBold" size={18}>Icon Only Buttons</BaseText>
        <View style={styles.row}>
          <BaseButton
            type="icon"
            variant="primary"
            size="small"
            icon={<ArrowRightIcon />}
            onPress={() => console.log('Icon small pressed')}
          />
          <BaseButton
            type="icon"
            variant="primary"
            size="regular"
            icon={<ArrowRightIcon />}
            onPress={() => console.log('Icon regular pressed')}
          />
          <BaseButton
            type="icon"
            variant="primary"
            size="large"
            icon={<ArrowRightIcon />}
            onPress={() => console.log('Icon large pressed')}
          />
        </View>
      </View>

      {/* Loading State */}
      <View style={styles.section}>
        <BaseText type="SemiBold" size={18}>Loading State</BaseText>
        <View style={styles.row}>
          <BaseButton
            variant="primary"
            size="regular"
            label="Loading"
            loading={true}
          />
          <BaseButton
            variant="link-subtle"
            size="regular"
            label="Loading"
            loading={true}
          />
        </View>
      </View>

      {/* Disabled State */}
      <View style={styles.section}>
        <BaseText type="SemiBold" size={18}>Disabled State</BaseText>
        <View style={styles.row}>
          <BaseButton
            variant="primary"
            size="regular"
            label="Disabled"
            disabled={true}
          />
          <BaseButton
            variant="link-subtle"
            size="regular"
            label="Disabled"
            disabled={true}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 12,
  },
});
